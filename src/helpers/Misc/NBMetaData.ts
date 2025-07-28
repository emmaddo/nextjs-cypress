import {AppSettings} from "@nb.frontend/helpers/Misc/AppSettings";

interface IMetaData<TString extends string> {
    title?: TString;
    description?: TString;
}

export const NBMetaData: ({}) => IMetaData<string> = ({
    title,
    description,
}: IMetaData<string>) => {
    return {
        title: title ?? AppSettings.Title,
        description: description ?? AppSettings.Description,
        icons: {
            icon: "Logo.svg"
        }
    };
};