export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const validatePassword = (password: string) =>
  password.length >= 6 ? true : false;

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => (password === confirmPassword ? true : false);

export const isItArrayofString = (value: Array<any>) => {
  if (Array.isArray(value)) {
    var somethingIsNotString = false;
    value.forEach(function (item) {
      if (typeof item !== "string") {
        somethingIsNotString = true;
      }
    });
    if (!somethingIsNotString && value.length > 0) {
      // console.log('string[]!');
      return true;
    }
    return false;
  }
  return false;
};

export function getFileType(file: File) {
  if (file.type.match("image.*")) return "image";

  if (file.type.match("video.*")) return "video";

  if (file.type.match("audio.*")) return "audio";

  if (file.type.match("application/pdf")) return "pdf";
  // etc...
  return "other";
}
