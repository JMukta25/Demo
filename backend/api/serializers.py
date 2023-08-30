from rest_framework import serializers
class TAVSerializer(serializers.ModelSerializer):
    class Meta:
        model = TAV
        fields = '__all__'