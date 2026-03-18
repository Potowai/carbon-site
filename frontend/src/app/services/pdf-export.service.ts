import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfExportService {
  constructor() { }

  /**
   * Export an HTML element to PDF
   * @param elementId ID of the element to export
   * @param filename Name of the PDF file to save
   */
  async exportElementToPdf(elementId: string, filename: string): Promise<void> {
    console.log('[PdfExportService] Starting export to PDF:', filename);
    
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error('[PdfExportService] Element not found:', elementId);
        throw new Error(`Element with ID "${elementId}" not found`);
      }

      // Convert HTML to canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true,
        logging: false
      });

      // Calculate PDF dimensions
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const pdf = new jsPDF('p', 'mm', 'A4');
      let position = 0;

      // Add image to PDF (handle multiple pages if needed)
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save(filename);
      console.log('[PdfExportService] ✓ PDF exported successfully:', filename);
    } catch (error) {
      console.error('[PdfExportService] ✗ Error exporting PDF:', error);
      throw error;
    }
  }

  /**
   * Export site data as a detailed PDF report
   * @param siteData Site information
   * @param filename Name of the PDF file
   */
  async exportSiteReportToPdf(
    siteData: any,
    filename: string
  ): Promise<void> {
    console.log('[PdfExportService] Creating site report PDF');
    
    try {
      const pdf = new jsPDF();
      let yPosition = 20;
      const pageWidth = pdf.internal.pageSize.width;
      const margin = 15;
      const contentWidth = pageWidth - 2 * margin;

      // Title
      pdf.setFontSize(20);
      pdf.text('CarbonSite - Site Report', margin, yPosition);
      yPosition += 15;

      // Site Information
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Site Information', margin, yPosition);
      yPosition += 8;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      
      const siteInfo = [
        { label: 'Site Name:', value: siteData.nom || 'N/A' },
        { label: 'Surface:', value: `${siteData.surface_m2 || 0} m²` },
        { label: 'Employees:', value: siteData.nb_employes || 0 },
        { label: 'Total Carbon:', value: `${siteData.total_carbon_tons || 0} tons` }
      ];

      siteInfo.forEach(info => {
        pdf.text(`${info.label}`, margin, yPosition);
        pdf.text(`${info.value}`, margin + 60, yPosition);
        yPosition += 7;
      });

      // Parking Information
      yPosition += 5;
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(11);
      pdf.text('Parking Distribution', margin, yPosition);
      yPosition += 8;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      
      const parkingInfo = [
        { label: 'Basement:', value: siteData.parking_sous_sol || 0 },
        { label: 'Under Slab:', value: siteData.parking_sous_dalle || 0 },
        { label: 'Aerial:', value: siteData.parking_aerien || 0 }
      ];

      parkingInfo.forEach(info => {
        pdf.text(`${info.label}`, margin, yPosition);
        pdf.text(`${info.value}`, margin + 60, yPosition);
        yPosition += 7;
      });

      // Footer
      yPosition = pdf.internal.pageSize.height - 20;
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'italic');
      pdf.text(`Generated on: ${new Date().toLocaleString()}`, margin, yPosition);

      pdf.save(filename);
      console.log('[PdfExportService] ✓ Site report PDF exported:', filename);
    } catch (error) {
      console.error('[PdfExportService] ✗ Error creating site report:', error);
      throw error;
    }
  }

  /**
   * Export dashboard data as PDF
   * @param dashboardTitle Dashboard title
   * @param metrics Key metrics to include
   * @param filename Name of the PDF file
   */
  async exportDashboardToPdf(
    dashboardTitle: string,
    metrics: any[],
    filename: string
  ): Promise<void> {
    console.log('[PdfExportService] Creating dashboard PDF');

    try {
      const pdf = new jsPDF();
      let yPosition = 20;
      const pageWidth = pdf.internal.pageSize.width;
      const margin = 15;

      // Title
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text(dashboardTitle, margin, yPosition);
      yPosition += 15;

      // Metrics
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Key Metrics', margin, yPosition);
      yPosition += 10;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);

      metrics.forEach((metric, index) => {
        if (yPosition > pdf.internal.pageSize.height - 30) {
          pdf.addPage();
          yPosition = 20;
        }

        pdf.setFont('helvetica', 'bold');
        pdf.text(`${metric.label}`, margin, yPosition);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`${metric.value}`, margin + 80, yPosition);
        yPosition += 8;
      });

      // Footer
      yPosition = pdf.internal.pageSize.height - 20;
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'italic');
      pdf.text(`CarbonSite Dashboard Report - ${new Date().toLocaleString()}`, margin, yPosition);

      pdf.save(filename);
      console.log('[PdfExportService] ✓ Dashboard PDF exported:', filename);
    } catch (error) {
      console.error('[PdfExportService] ✗ Error creating dashboard PDF:', error);
      throw error;
    }
  }
}
