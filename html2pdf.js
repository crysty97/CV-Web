<button onclick="exportarPDF()" class="px-4 py-2 bg-indigo-600 text-white rounded-lg mt-4">Exportar a PDF</button>
<script>
function exportarPDF() {
    var element = document.querySelector('main');
    html2pdf().from(element).save();
}