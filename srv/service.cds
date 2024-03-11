using {CBE} from '../db/schema';

service Catalogcbeservice {
    entity VENDOR_DATA                as projection on CBE.VENDOR_DATA;
    entity PAN_Details                as projection on CBE.PAN_Details;


    @cds.redirection.target
    entity PAN_PRICE_DETAILS          as projection on CBE.PAN_PRICE_DETAILS;

    entity list_items                 as
        select distinct
            Item_Code,
            PAN_Number,
            Item_Short_Description,
            capactity_each,
            dia,
            tl_tl_len,
            moc,
            design_pb,
            weights,
            Quantity
        from CBE.PAN_PRICE_DETAILS;

    entity no_of_items                as
        select distinct
            Item_Code,
            PAN_Number,
            Item_Short_Description,
            capactity_each,
            dia,
            tl_tl_len,
            moc,
            design_pb,
            weights,
            Quantity

        from CBE.PAN_PRICE_DETAILS;

    entity list_of_items              as
        select distinct
            Item_Code,
            PAN_Number
        from CBE.PAN_PRICE_DETAILS
        where
            PAN_Number in (
                select PAN_Number from CBE.PAN_Details
            );

    entity items_with_vendor          as
        select distinct
            Item_Code,
            vendor_code,
            PAN_Number
        from CBE.PAN_PRICE_DETAILS;

    entity OFFER                      as projection on CBE.OFFER;
    ////////////////////////////////////////////////////////////////////////


    entity Projects                   as projection on CBE.PAN_proj;
    entity Items                      as projection on CBE.PAN_PRICE_DETAILS_proj;
    entity Vendors                    as projection on CBE.PAN_vendor_data_proj;
    entity PAN_Info                   as projection on CBE.PAN_Details_proj;
    entity PAN_vendor_reponse_details as projection on CBE.PAN_vendor_response_proj;
    entity vendorTaxDetails           as projection on CBE.vendorTaxDetails;
    entity PanWebEvent                as projection on CBE.PAN_WEB_EVENT;


    entity Project_Details            as
        select distinct
            key Pr.ProjectId,
                Pa.Project_Description
        from Projects as Pr
        inner join PAN_Info as Pa
            on Pr.PAN_Number = Pa.PAN_Number
        where
            Pr.task_id != 'NA';

    entity Vendor_details             as
        select
        //  distinct
            V.Proposed_Vendor_Code as vendor_code     : String,
            Pr.ProjectId,
            Pr.PAN_Number          as proj_pan_number : String,
            V.*
        from Projects as Pr
        inner join Vendors as V
            on Pr.PAN_Number = V.PAN_Number;


    entity Item_details               as
        select distinct
            Pr.ProjectId,
            I.*
        from Projects as Pr
        inner join Items as I
            on Pr.PAN_Number = I.PAN_Number;

    function getExcelData(data : String)           returns String;
    function cbeObjectPageData(projectId : String) returns String;
    function storeVendorDetails(result : String) returns String;
    function getVendorDetails() returns String;


}
