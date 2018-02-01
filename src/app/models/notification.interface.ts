export interface Notification {

  id: number;
  subject:          string;
  from:             string;
  senderProfilePicUrl: string;
  to:               string;
  notificationText: string;
  dateTime:         Date;
  isRead:           boolean;

}
