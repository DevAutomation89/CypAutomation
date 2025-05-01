class Quotation{

    clickRequestQuotation(){
        cy.get(`a[href="#tabs-2"]`).click();
    }

    calculateCover(cover, parkingLocation){
        cy.get(`[id="quotation_breakdowncover"]`).select(cover),
       
        cy.get(`[id="quotation_vehicle_attributes_parkinglocation"]`).select(parkingLocation),
        
        
        cy.get(`[id="quotation_incidents"]`).type("yyyy"),
        cy.get(`[id="quotation_vehicle_attributes_registration"]`).type("yyyy"),
        cy.get(`[id="quotation_vehicle_attributes_mileage"]`).type("yyyy"),
        cy.get(`[id="quotation_vehicle_attributes_value"]`).type("yyyy")
       
    }

    saveQuotation(){
        cy.get(`input[name="submit"]`).click();

    }

    



}export default Quotation