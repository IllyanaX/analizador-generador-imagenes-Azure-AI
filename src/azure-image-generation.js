import axios from 'axios';

const generateImage = async () => {
  try {
    const apiKey = 'TU_CLAVE_DE_API_DE_AZURE'; // Reemplaza con tu clave de API de Azure OpenAI

    const response = await axios.post(
      'https://api.openai.com/v1/images',
      {
        prompt: 'Una imagen de uno gato',
        model: 'image-alpha-001', // Modelo a utilizar
        n: 1, // Número de imágenes para generar
        size: '256x256', // Tamaño de la imagen
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al generar la imagen:', error);
    throw error;
  }
};

export default generateImage;