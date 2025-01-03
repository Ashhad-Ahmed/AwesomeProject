import PushNotification from 'react-native-push-notification';

export const scheduleDeadlineNotification = (title, message, deadline) => {
  const notificationTime = new Date(deadline).getTime();  // Convert deadline to timestamp
  const now = Date.now();

  // Only schedule notification if the task is not overdue
  if (notificationTime > now) {
    PushNotification.localNotificationSchedule({
      title,
      message,
      date: new Date(notificationTime),  // Schedule notification at the deadline time
      allowWhileIdle: true,  // Allow notification when app is in the background
    });
  }
};