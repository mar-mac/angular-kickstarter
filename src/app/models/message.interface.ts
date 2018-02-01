export interface Message {

  id:           number;
  subject:      string;
  from:         string;
  senderProfilePicUrl: string;
  to:           string;
  messageText:  string;
  dateTime:     Date;
  isRead:       boolean;

}
