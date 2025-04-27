$("#marque").change(function () {
    var marque = $(this).val();
    $.get(`/get_models/${marque}`, function (data) {
        var modeleSelect = $("#modele");
        modeleSelect.empty();
        modeleSelect.append('<option value="" selected>Select a model</option>');
        data.forEach(function (model) {
            modeleSelect.append(`<option value="${model}">${model}</option>`);
        });
    });
});

// Pre-load model options if marque and modele already selected
$(document).ready(function () {
    const selectedMarque = $("#marque").val();
    const selectedModele = "{{ form_data.modele or '' }}";
    if (selectedMarque && selectedModele) {
        $.get(`/get_models/${selectedMarque}`, function (data) {
            var modeleSelect = $("#modele");
            modeleSelect.empty();
            modeleSelect.append('<option value="" selected>Select a model</option>');
            data.forEach(function (model) {
                var isSelected = model === selectedModele ? "selected" : "";
                modeleSelect.append(`<option value="${model}" ${isSelected}>${model}</option>`);
            });
        });
    }
});

// Clear all form fields and reset the price message when the reset button is clicked
$("#resetBtn").click(function () {
    // Clear all input fields
    $("#marque").val("");
    $("#modele").empty().append('<option value="" selected>Select a model</option>');
    $("#Carburant").val("");
    $("#Transmission").val("");
    $("#premierMain").val("0");
    $("#Kilométrage").val("");
    $("#Année").val("");
    $("#CV").val("");

    // Reset the price message without collapsing the container
    $("#priceResult").html('<div class="col-12 text-center"><p class="pap" id="priceResult">Enter the details to predict price</p></div>');
});