from django.shortcuts import render
from rest_framework.response import Response
# from requests import Response
from rest_framework.decorators import api_view 
# from app.models import MyModel
import pymongo
import json
from bson import ObjectId  # Import ObjectId from bson module
connection_string = "mongodb+srv://riskmanagementtool:codeblooded@riskmanagementtool.0v8bgvt.mongodb.net/TAV"

    # Create a MongoClient object
client = pymongo.MongoClient(connection_string)

    # Access a specific database
db = client['TV']

    # Access a specific collection within the database
collection = db['TAV']
key_collection = db['TAV_Key']
collection.create_index([('_id', pymongo.ASCENDING), ('threat', pymongo.ASCENDING)], unique=True)

def get_next_primary_key():
    # Find and update the next primary key value in the key collection
    key_doc = key_collection.find_one_and_update(
        {'_id': 'TAV_primary_key'},
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
def addTAV(request):
    # Example: Insert a document into the collection
    document = request.data
     # Get the next primary key value
    document['_id'] = get_next_primary_key()
    collection.insert_one(document)
    return Response({"message" : "Saved data"})

@api_view(['GET'])
def getTAV(request): 
    documents = collection.find()
    # Print the documents.
    l = []
    for i in documents:
        l.append(serialize_doc(i))
    print(l)
    return Response(l)

@api_view(['PUT'])
def updateTAV(request, threatid,threatname):
    # Example: Update a document in the collection based on the threat name
    updated_data = request.data
    collection.update_one({"threat": threatname, "_id":threatid}, {"$set": updated_data})
    return Response({"message": "Updated data"})

@api_view(['DELETE'])
def deleteTAV(request, threatid,threatname):
    

    print("in delete")
    
    # Example: Delete a document in the collection based on the threat name
    result = collection.delete_one({ "_id":threatid,"threat":threatname})

    if result.deleted_count == 1:
        return Response({"message": f"Deleted threat with name '{threatname}'"})
    else:
        return Response({"message": f"Threat with name '{threatname}' not found"})





