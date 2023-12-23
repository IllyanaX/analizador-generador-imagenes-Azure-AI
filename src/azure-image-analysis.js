import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    const apiKey = 'TU_CLAVE_DE_API_DE_AZURE'; // Reemplaza con tu clave de API de Azure

    const response = await axios.post(
      'https://servicio-de-vision.cognitiveservices.azure.com/vision/v4.0/analyze',
      {
        url: imageUrl,
      },
      {
        params: {
          visualFeatures: 'Description,Tags', 
          details: 'Celebrities,Landmarks',
          language: 'en',
        },
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': apiKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al analizar la imagen:', error);
    throw error;
  }
};

export default analyzeImage;