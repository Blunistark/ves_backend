const { generateReport } = require('../services/reportService');

// Generate a report
const generateReportController = async (req, res) => {
  const { reportType, generatedBy } = req.body;

  try {
    const report = await generateReport(reportType, generatedBy);
    res.status(201).json({ message: 'Report generated successfully', report });
  } catch (error) {
    res.status(500).json({ error: 'Error generating report' });
  }
};

module.exports = { generateReportController };