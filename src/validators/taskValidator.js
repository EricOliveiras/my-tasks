import * as yup from "yup"

export const createTaskValidator = yup.object({
  title: yup.string().required("Compo titulo requerido").min(4, "O titulo deve conter no minimo 4 caracterees"),
  description: yup.string().notRequired()
})