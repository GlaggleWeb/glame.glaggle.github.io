export default async ({ req, res, log }) => {
  // Der Schlüssel wird hier automatisch aus den Variablen geholt!
  const apiKey = process.env.GLAME_AI_PRO_API_KEY; 

  if (!apiKey) {
    return res.json({ error: "Kein API Key gefunden!" });
  }

  // Hier kommt deine eigentliche KI-Logik hin
  // (Du benutzt den 'apiKey', um die KI anzusprechen)
  
  return res.json({ 
    message: "Die Funktion läuft und der Schlüssel wurde erfolgreich geladen!" 
  });
};
