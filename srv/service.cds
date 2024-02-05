using {CBE} from '../db/schema';

service Catalogcbeservice {
    entity VENDOR_DATA       as projection on CBE.VENDOR_DATA;
    entity PAN_Details       as projection on CBE.PAN_Details;

    @cds.redirection.target
    entity PAN_PRICE_DETAILS as projection on CBE.PAN_PRICE_DETAILS;

    entity list_items        as
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

    entity no_of_items       as
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
        select
            distinct Item_Code,
            PAN_Number
        from CBE.PAN_PRICE_DETAILS
        where
            PAN_Number in (
                select PAN_Number from CBE.PAN_Details
            );

    entity items_with_vendor as
        select distinct
            Item_Code,
            vendor_code,
            PAN_Number
        from CBE.PAN_PRICE_DETAILS;

    entity OFFER             as projection on CBE.OFFER;

}
