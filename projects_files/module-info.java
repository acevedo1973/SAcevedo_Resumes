module com.example.cellphonebillingapp {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.cellphonebillingapp to javafx.fxml;
    exports com.example.cellphonebillingapp;
}