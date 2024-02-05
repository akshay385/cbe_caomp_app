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
