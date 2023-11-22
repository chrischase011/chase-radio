export const useRadioAPI = () => {
  const config = useRuntimeConfig()
  const url = config.public.API_URL || ""
  const key = config.public.API_KEY || ""
  const host = config.public.API_HOST || "";
  return ref({
    url: url,
    key: key,
    host: host
  })
}
