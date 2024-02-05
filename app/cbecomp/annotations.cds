using Catalogcbeservice as service from '../../srv/service';

annotate service.PAN_Details with @(
    UI.LineItem : [
        
        {
            $Type : 'UI.DataField',
            Value : PAN_Number,
        },
    ]
);
