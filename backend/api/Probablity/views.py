from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view 
import pymongo
import json
from bson import ObjectId
connection_string = "mongodb+srv://riskmanagementtool:codeblooded@riskmanagementtool.0v8bgvt.mongodb.net/TAV"
#creating a mongo client object
client=pymongo.MongoClient(connection_string)
#Access a specific database
db=client['TV']
#Access a specific collection within the database
collection=db['PD']
key_collection=db['PD_Key']
collection.create_index([('_id',pymongo.ASCENDING),('probablityname',pymongo.ASCENDING)],unique=True)

def get_next_primary_key():
    # Find and update the next primary key value in the key collection
    key_doc = key_collection.find_one_and_update(
        {'_id': 'PD_primary_key'},
        {'$inc': {'value': 1}},
        upsert=True,
        return_document=True
    )
    return key_doc['value']

def serialize_doc(i):
    for key, value in i.items():
        if isinstance(value, ObjectId):
            i[key] = str(value)
    return i

@api_view(['POST'])
def addProbablity(request):
    document=request.data
    #Inserting a Risk
    document['_id']=get_next_primary_key()
    collection.insert_one(document)
    return Response({"message":"Saved the data"})

@api_view(['GET'])
def getProbablity(request):
    document=collection.find()
    l=[]
    for i in document:
        l.append(serialize_doc(i))
        print(l)
    return Response(l)
       
@api_view(['PUT'])
def updateProbablity(request,probablityid,probablityname):
    updated_data=request.data
    result=collection.update_one({"probablityname":probablityname,"_id":probablityid},{"$set":updated_data})
    if result.modified_count == 1:
     return Response({"message":f"Updated Risk with name'{probablityname}'"})
    else:
     return Response({"message":f"Risk with the name '{probablityname}' not found"})

@api_view(['DELETE'])
def deleteProbablity(request,probablityid,probablityname):
   result=collection.delete_one({"probablityname":probablityname,"_id":probablityid})
   if result.deleted_count == 1:
    return Response({"message":f"Deleted Risk with name'{probablityname}'"})
   else:
    return Response({"message":f"Risk with the name '{probablityname}' not found"})
    
       


   



