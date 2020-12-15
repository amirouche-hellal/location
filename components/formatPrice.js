
//pour formater le style des prix  en euro etc

export   function FormatPrice(value) {
    return Intl.NumberFormat("de-DE", {
        style :"currency",
        currency : "EUR"}
        ).format(value)
}

