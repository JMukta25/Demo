from django.shortcuts import render
from rest_framework.response import Response
# from requests import Response
from rest_framework.decorators import api_view 
# from app.models import MyModel
import pymongo
import json
from bson import ObjectId  # Import ObjectId from bson module

def serialize_doc(i):
    for key, value in i.items():
        if isinstance(value, ObjectId):
            i[key] = str(value)
    return i

@api_view(['POST'])
def addTAV(request):
    connection_string = "mongodb+srv://riskmanagementtool:codeblooded@riskmanagementtool.0v8bgvt.mongodb.net/TAV"

    # Create a MongoClient object
    client = pymongo.MongoClient(connection_string)

    # Access a specific database
    db = client['TV']

    # Access a specific collection within the database
    collection = db['TAV']

    # Example: Insert a document into the collection
    document = request.data
    collection.insert_one(document)

    client.close()
    # data = request.data 
    # models = MyModel(name = data['name'])
    # models.save() 
    return Response({"message" : "Saved data"})

@api_view(['GET'])
def getTAV(request): 
    connection_string = "mongodb+srv://riskmanagementtool:codeblooded@riskmanagementtool.0v8bgvt.mongodb.net/TAV"

    # Create a MongoClient object
    client = pymongo.MongoClient(connection_string)

    # Access a specific database
    db = client['TV']

    # Access a specific collection within the database
    collection = db['TAV']

    documents = collection.find()

    # Print the documents.
    l = []
    for i in documents:
        l.append(serialize_doc(i))
    print(l)
    return Response(l)