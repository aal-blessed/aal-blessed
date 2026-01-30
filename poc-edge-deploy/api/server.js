const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    next();
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

app.get('/api/time', (req, res) => {
    const now = new Date();
    res.json({
        time: now.toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        region: process.env.REGION || 'unspecified'
    });
});

app.get('/api/echo', (req, res) => {
    res.json({
        message: 'Echo test',
        query: req.query,
        headers: {
            userAgent: req.get('user-agent'),
            host: req.get('host')
        }
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({
        error: 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📍 Region: ${process.env.REGION || 'unspecified'}`);
});
