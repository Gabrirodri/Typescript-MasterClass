interface  ImailTo{
  name: String;
  email: String;

}
interface ImailMessage{
  subject: string;
  body: string;
  attachment?: string[];  
}
interface IMessageDTO{
  to: ImailTo;
  message: ImailMessage;
}
interface IEmailService{
  sendEmail(request: IMessageDTO): void
}
class EmailService implements IEmailService{
  sendEmail({to, message}: IMessageDTO){
    console.log(`Email enviado para  ${to.name}: ${message.subject} `)
  }
}

export default EmailService;