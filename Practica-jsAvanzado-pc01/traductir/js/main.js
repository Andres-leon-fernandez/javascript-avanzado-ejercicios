const translate = new AWS.Translate();
const params = {
    SourceLanguageCode: "es",
    TargetLanguageCode: "ja",
    Text: "hola, mundo",
};

const result = await translate.translateText(params).promise();
console.log(result.TranslatedText);
