namespace CBE;

entity PAN_Details {
    key PAN_Number          : String @Common.Label: 'Pan Number';
        Project_Description : String;

        vendors             : Association to many VENDOR_DATA
                                  on vendors.PAN_Number = PAN_Number;
}

entity VENDOR_DATA {
    key vendor_code          : String;
    key PAN_Number           : String;
        Vendor_Name          : String;
        Vendor_Location      : String;
        Technically_Approved : String;
        bids                 : Association to many PAN_PRICE_DETAILS
                                   on  bids.vendor_code = vendor_code
                                   and bids.PAN_Number  = PAN_Number;
}

entity PAN_PRICE_DETAILS {
    key PAN_Number             : String;
    key vendor_code            : String;
    key Item_Code              : String;
        Item_Short_Description : String;
        Quantity               : String;
        capactity_each         : String;
        dia                    : String;
        tl_tl_len              : String;
        moc                    : String;
        design_pb              : String;
        weights                : String;
        Amount                 : Decimal;
        Unit_Price             : Decimal;
        offers                 : Association to many OFFER
                                     on  offers.vendor_code = vendor_code
                                     and offers.PAN_Number  = PAN_Number
                                     and offers.Item_Code   = Item_Code;
}

entity OFFER {
    key vendor_code                         : String;
    key PAN_Number                          : String;
    key Item_Code                           : String;
    key offer_id                            : String;
        offer_name                          : String;
        qtn_ref                             : String;
        date                                : String;
        validity                            : String;
        unit_rate                           : String;
        unit_rate_per_unit                  : String;
        total_amt_inr                       : String;
        spares_for_2_years                  : String;
        grandtotal                          : String;
        packing_marking_forwarding          : String;
        inspection_testing_charges          : String;
        documentation_charges               : String;
        total_basic_price_including_packing : String;
        rnod                                : String;
        custom_duty_cess                    : String;
        sgst                                : String;
        igst                                : String;
        ugst                                : String;
        shipment_charges                    : String;
        total_basic_price_with_taxes        : String;
        total_basic_price_without_taxes     : String;
        per_diem_rate_for_supervision       : String;
        price_basis                         : String;
        point_of_delivery                   : String;
        delivery_period                     : String;
        payment_terms                       : String;
        liquidated_damages                  : String;
        warranty_defect_liability_period    : String;
        cpbg                                : String;
        contact_person                      : String;
        contact_number                      : String;
        order_given_to                      : String;
        technically_approved                : String;
        approved_vendor                     : String;
}

/////////////////////////////////////////////////////

entity PAN_proj {

    key ProjectId  : String;
    key PAN_Number : String;
        task_id    : String;


}


entity PAN_Details_proj {
    key PAN_Number                                   : String default 'def';
        SBG                                          : String;
        SBU                                          : String;
        BUORPurchasing_Group                         : String;
        Plant_Code                                   : String;
        Project_Description                          : String;
        PR_NumberBKTsBKT                             : String;
        Subject_of_ProposalOROrder                   : String;
        Previous_PAN_References                      : String;
        Split_OrderORNo_of_vendors                   : String;
        SOP_Type                                     : String;
        Order_Type_OR_Document_tyFuuidpe             : String;
        Asset_Type                                   : String;
        Nature_of_Transaction                        : String;
        Order_Location_OR_Plant                      : String;
        Base_line_spend                              : String;
        Project_CurrencyORBase_Currency              : String;
        Order_CurrencyORBid_currency                 : String;
        Final_proposed_Value                         : String;
        Savings_achieved_btw_initial_and_final_quote : String;
        Savings_against_base_line_spend_of_RFP       : String;
        Number_of_Vendors_Shortlisted_for_RFP        : String;
        Number_of_Vendors_Technically_Qualified      : String;
        Required_at_Site_Date                        : String;
        RFP_Number                                   : String;
        RFP_Publish_Date                             : String;
        Time_Taken_for_FinalizationDASHIn_DAYS       : String;
        status                                       : String;
        statusInd                                    : Integer; //used for criticality rep
        created_by                                   : String;
        task_id                                      : String;
        type                                         : String;
        status_a                                     : String;
        switch_control                               : Boolean default false;
        ProjectId                                    : String;
        number_of_vendors_invited                    : String;
        total_levels_of_approval                     : String(2);
        Current_level_of_approval                    : String(2);
        Sap_workitem_id                              : String;
        Comments                                     : LargeString;
        submitted_by                                 : String;
        submitted_date                               : String;

}


entity PAN_vendor_data_proj {
    key Proposed_Vendor_Code               : String; //disp
    key PAN_Number                         : String;
        Awarded_Vendor                     : String;
        Vendor_Name                        : String; //disp
        Vendor_Location                    : String;
        Technically_Approved               : String;
        Client_Approved                    : String;
        Original_quote                     : String; //disp
        Final_Quote                        : String; //disp
        Order_amount_OR_Split_order_amount : String;
        Discount_Amount                    : String;
        Discount_percentage                : String;
        Rank                               : String;

}


entity PAN_PRICE_DETAILS_proj 
{
  key pdkey:UUID;
   Proposed_Vendor_Code : String; 
    PAN_Number : String;
   Item_Code : String;
  
    HSN_OR_SAC_Code : String;
   
   extendedPrice:String;
   Item_Short_Description : String;
   UOM : String;
   Quantity : String;
   Unit_Price : String;
   Amount : String;
   Indian_Tax_PER : String;
   Quantity_Over_Delivery_Tolerance : String;
//    pdtovend : Association to PAN_vendor_data on pdtovend.Proposed_Vendor_Code = Proposed_Vendor_Code;
}

entity PAN_vendor_response_proj {

    key Proposed_Vendor_Code                                                         : String;
    key PAN_Number                                                                   : String;
        Proposed_Vendor_Name                                                         : String;
        Supplier_Origin_State                                                        : String;
        Destination_State_BKTShipDASHto_LocationBKT                                  : String;
        Vendor_GST_Number                                                            : String;
        Vendor_CE_Score                                                              : String;
        Vendor_CE_Date                                                               : String;
        Vendor_PE_Score                                                              : String;
        Vendor_PE_Date                                                               : String;
        Vendor_Contact_PersonDASH1                                                   : String;
        Vendor_Contact_PersonDASH2                                                   : String;
        Technical_Committee_who_cleared_the_proposal                                 : String;
        Commercial_Committee_who_cleared_the_proposal                                : String;
        Vendor_References_to_be_displayed_in_Order                                   : String;
        Shortlisted_Vendors_Response_summary                                         : String;
        Order_Value_BKTIn_Project_CurrencyBKT                                        : String;
        Order_Value_BKTIn_Bid_CurrencyBKT                                            : String;
        Vendor_Final_Quotation_Date                                                  : String;
        Vendor_Final_Quotation_Amount                                                : String;
        Project_CurrencyORBase_Currency                                              : String;
        Order_CurrencyORBid_currency                                                 : String;
        Incoterms                                                                    : String;
        Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC            : String;
        Details_of_deviated_or_better_terms_agreed_with_the_Vendor                   : String;
        Market_Scenario_and_Demand                                                   : String;
        Companys_Position_and_Market_dynamics_of_this_purchase                       : String;
        Should_Be_Cost_estimated                                                     : String;
        Highlights_of_this_proposal_and_Price_Justification_for_this_proposal        : String;
        Price_Escalation_Agreed_if_any                                               : String;
        Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor : String;
        Transportation                                                               : String;
        Logistics_Cost                                                               : String;
        Delivery_Schedule                                                            : String;
        Tax_Details                                                                  : String;
        Additional_Remarks                                                           : String;
        ABG                                                                          : String;
        ABG_Value                                                                    : String;
        CPBG                                                                         : String;
        CPBG_Value                                                                   : String;
        Scope_and_Responsibilities                                                   : LargeString;
        Commercial_Terms                                                             : LargeString;
        Compliance_Terms                                                             : LargeString;
        Others                                                                       : LargeString;
}

entity vendorTaxDetails {
    key Proposed_Vendor_Code : String;
    key PAN_Number           : String;
    key Item_Code            : String;
    key idd                  : UUID;
        name                 : String;
        value                : String;
}

entity PAN_WEB_EVENT {
    key idd                         : String;
    key PAN_Number                  : String;
        eventNo                     : String;
        number                      : String;
        date                        : String;
        numberOfVendorsParticipated : String;
        l1AmountObtained            : String;
}
