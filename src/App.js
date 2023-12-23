import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [generationResults, setGenerationResults] = useState(null);

  const handleImageAnalysis = async () => {
    try {
      setLoading(true);
      const results = await analyzeImage(imageUrl);
      setAnalysisResults(results);
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    } finally {
      setLoading(false);
    }
  };

  const handleImageGeneration = async () => {
    try {
      setLoading(true);
      const results = await generateImage();
      setGenerationResults(results);
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    } finally {
      setLoading(false);
    }
  };

  const DisplayResults = () => {
    if (loading) {
      return <p>Procesando...</p>;
    }

    return (
      <div>
        {analysisResults && (
          <>
            <p>Resultados del análisis:</p>
            <pre>{JSON.stringify(analysisResults, null, 2)}</pre>
            <p>Imagen analizada: {imageUrl}</p>
          </>
        )}
        {generationResults && (
          <>
            <p>Resultados de la generación:</p>
            <img src={generationResults.url} alt="Imagen generada" />
            <p>Imagen generada: {generationResults.url}</p>
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1>Aplicación de Análisis y Generación de Imágenes</h1>
      <label>
        Ingrese la URL de la imagen:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleImageAnalysis} disabled={loading}>
        Analizar Imagen
      </button>
      <button onClick={handleImageGeneration} disabled={loading}>
        Generar Imagen
      </button>
      <DisplayResults />
    </div>
  );
}

export default App;