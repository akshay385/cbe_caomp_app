using Catalogcbeservice as service from '../../srv/service';

annotate service.Item with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : itemno,
            },
            {
                $Type : 'UI.DataField',
                Value : itemname,
            },
            {
                $Type : 'UI.DataField',
                Value : indent,
            },
            {
                $Type : 'UI.DataField',
                Value : client,
            },
            {
                $Type : 'UI.DataField',
                Value : project,
            },
            {
                $Type : 'UI.DataField',
                Value : capacity_each,
            },
            {
                $Type : 'UI.DataField',
                Value : dia_mm,
            },
            {
                $Type : 'UI.DataField',
                Value : tl_to_tl_length,
            },
            {
                $Type : 'UI.DataField',
                Value : moc,
            },
            {
                $Type : 'UI.DataField',
                Value : design_pressure_bar,
            },
            {
                $Type : 'UI.DataField',
                Value : weights,
            },
            {
                $Type : 'UI.DataField',
                Value : quantity,
            },
        ],
    },
    UI.Facets : []
);
