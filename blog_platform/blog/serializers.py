from rest_framework import serializers
from .models import Post
from transformers import pipeline
from transformers import AutoTokenizer
from transformers import AutoModelForSeq2SeqLM

class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    summary = serializers.CharField(read_only=True)  # Make summary read-only

    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        content = validated_data.get("content", "")

        model_name = "KipperDev/t5_summarizer_model"

        tokenizer = AutoTokenizer.from_pretrained(model_name)
        model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
        summarizer = pipeline("summarization", model=model, tokenizer=tokenizer)

        # Example usage
        prefix = "summarize: "
        input_text = "Your input text here."
        input_ids = tokenizer.encode(prefix + input_text, return_tensors="pt")
        summary_ids = model.generate(input_ids)
        summarize = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

        print(summarize)
        validated_data["summarize"] = summarize  # Include the summary in the post data
        return super().create(validated_data)
