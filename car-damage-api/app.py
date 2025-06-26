from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io

app = Flask(__name__)

model = load_model('model/cnn-model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    img_file = request.files['image']
    img = Image.open(img_file.stream).convert('RGB')
    
    img = img.resize((224, 224))  
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    # Predict
    predictions = model.predict(img_array)
    confidence = float(predictions[0][0])
    predicted_class = 1 if confidence >= 0.5 else 0

    return jsonify({
        "predicted_class": int(predicted_class),
        "confidence": float(np.max(predictions))
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)