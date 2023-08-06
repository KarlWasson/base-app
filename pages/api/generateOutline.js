const axios = require('axios');

module.exports = async (req, res) => {
  const { title, description, tag } = req.body;

  // Ensure that all parameters are provided
  if (!title || !description || !tag) {
    res.status(400).json({ error: 'Please provide title, description, and tag.' });
    return;
  }

  const OPENAI_API_KEY = process.env.OPEN_API_KEY;
  const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
  };

  const prompt = `Generate an outline for a blog post. Layout in markdown with headers. Add SEO optimized meta title and meta description. Create a social media post for the content. Title: ${title}, Description: ${description}, Tag: ${tag}`;

  try {
    const response = await axios.post(OPENAI_URL, {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a knowledgable product marketer for malware prevention, detection and analysis platform.' },
        { role: 'user', content: prompt },
      ],
    }, { headers });

    const outline = response.data.choices[0].message.content;
    res.status(200).json({ outline });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating the outline.' });
  }
};
