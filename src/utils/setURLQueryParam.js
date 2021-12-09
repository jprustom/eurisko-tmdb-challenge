export default function setURLQueryParam(uri, key, val) {
    return uri
        .replace(RegExp("([?&]"+key+"(?=[=&#]|$)[^#&]*|(?=#|$))"), "&"+key+"="+encodeURIComponent(val))
        .replace(/^([^?&]+)&/, "$1?");
}