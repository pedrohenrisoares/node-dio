export enum ContentType {
  // JSON
  JSON = "application/json",

  // Formulários
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Texto
  TEXT = "text/plain",
  HTML = "text/html",
  CSV = "text/csv",
  XML_TEXT = "text/xml",

  // XML
  XML = "application/xml",

  // Arquivos
  OCTET_STREAM = "application/octet-stream", // binário genérico
  PDF = "application/pdf",
  ZIP = "application/zip",

  // Imagens
  JPEG = "image/jpeg",
  PNG = "image/png",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",

  // Áudio/Vídeo
  MP3 = "audio/mpeg",
  MP4 = "video/mp4",
  OGG_AUDIO = "audio/ogg",
  OGG_VIDEO = "video/ogg",
  WEBM_AUDIO = "audio/webm",
  WEBM_VIDEO = "video/webm",

  // Outros
  JAVASCRIPT = "application/javascript",
  WASM = "application/wasm",
  NDJSON = "application/x-ndjson", // JSON linha a linha
}
