using Catalogcbeservice as service from '../../srv/service';

annotate service.Project_Details with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'ProjectId',
        Value: ProjectId,
    },
    {
        $Type: 'UI.DataField',
        Label: 'Project_Description',
        Value: Project_Description,
    },
]);

annotate service.Project_Details with @UI.CreateHidden;
annotate service.Project_Details with @UI.DeleteHidden;


annotate service.Project_Details with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'ProjectId',
                Value: ProjectId,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Project_Description',
                Value: Project_Description,
            },
        ],
    },
    UI.Facets                     : []
);


annotate service.Project_Details with @(UI.HeaderInfo: {
    Title         : {
        $Type: 'UI.DataField',
        Value: Project_Description,
    },
    Description   : {
        $Type: 'UI.DataField',
        Value: ProjectId,
    },
    TypeName      : 'Comparative statement',
    TypeNamePlural: '',
});

annotate service.Project_Details with @Common.SemanticKey: [ProjectId];
