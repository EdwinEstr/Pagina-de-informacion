document.addEventListener('DOMContentLoaded', function() {
    const calculateMaterialCostButton = document.getElementById('calculate-material-cost');
    const materialCostResult = document.getElementById('material-cost-result');

    calculateMaterialCostButton.addEventListener('click', function() {
        const initialInventory = parseFloat(prompt('Ingrese el inventario inicial de materia prima:'));
        const purchasedMaterial = parseFloat(prompt('Ingrese la cantidad de materia prima adquirida:'));
        const finalInventory = parseFloat(prompt('Ingrese el inventario final de materia prima:'));
        const pricePerUnit = parseFloat(prompt('Ingrese el precio por unidad de materia prima:'));

        const materialCost = (initialInventory + purchasedMaterial - finalInventory) * pricePerUnit;
        materialCostResult.textContent = `Costo de materias primas: $${materialCost}`;
    });

    const calculateLaborCostButton = document.getElementById('calculate-labor-cost');
    const laborCostResult = document.getElementById('labor-cost-result');

    calculateLaborCostButton.addEventListener('click', function() {
        const salaries = parseFloat(prompt('Ingrese el costo de salarios:'));
        const socialSecurity = parseFloat(prompt('Ingrese el costo de seguridad social:'));
        const vacationCost = parseFloat(prompt('Ingrese el costo de vacaciones:'));
        const extraHours = parseFloat(prompt('Ingrese el costo de horas extra:'));

        const laborCost = salaries + socialSecurity + vacationCost + extraHours;
        laborCostResult.textContent = `Costo de mano de obra directa: $${laborCost}`;
    });

    const calculateIndirectCostButton = document.getElementById('calculate-indirect-cost');
    const indirectCostResult = document.getElementById('indirect-cost-result');

    calculateIndirectCostButton.addEventListener('click', function() {
        const rent = parseFloat(prompt('Ingrese el costo de renta de instalaciones y equipos:'));
        const repairs = parseFloat(prompt('Ingrese el costo de reparaciones:'));
        const maintenance = parseFloat(prompt('Ingrese el costo de mantenimiento:'));
        const amortization = parseFloat(prompt('Ingrese el costo de amortizaciones:'));
        const fuel = parseFloat(prompt('Ingrese el costo de combustible:'));
        const indirectLabor = parseFloat(prompt('Ingrese el costo de mano de obra indirecta:'));

        const indirectCost = rent + repairs + maintenance + amortization + fuel + indirectLabor;
        indirectCostResult.textContent = `Costo de mano de obra indirecta: $${indirectCost}`;
    });
});
