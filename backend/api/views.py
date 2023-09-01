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

def serialize_doc(i):
    for key, value in i.items():
        if isinstance(value, ObjectId):
            i[key] = str(value)
    return i

@api_view(['POST'])
def addTAV(request):
    # Example: Insert a document into the collection
    document = request.data
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
def updateTAV(request, threat_name):
    # Example: Update a document in the collection based on the threat name
    updated_data = request.data
    collection.update_one({"threat": threat_name}, {"$set": updated_data})
    return Response({"message": "Updated data"})

@api_view(['DELETE'])
def deleteTAV(request, threat_name):
    # Example: Delete a document in the collection based on the threat name
    result = collection.delete_one({"threat": threat_name})

    if result.deleted_count == 1:
        return Response({"message": f"Deleted threat with name '{threat_name}'"})
    else:
        return Response({"message": f"Threat with name '{threat_name}' not found"})




