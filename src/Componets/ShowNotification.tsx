import { notification } from "antd"

type NotificationType = 'success' | 'error' | 'info' | 'warning'

type NotificationParametersType = {
  title: string
  description: React.ReactNode
  type: NotificationType
  duration?: number
  onClick?: () => void
}
 const showNotification = (
  parameters: NotificationParametersType
): void => {
  notification[parameters.type]({
    message: parameters.title,
    description: parameters.description,
    onClick: parameters.onClick,
    duration: parameters.duration ? parameters.duration : 10,
  })
}
export {showNotification}