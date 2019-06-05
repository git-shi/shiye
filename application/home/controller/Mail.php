<?php
/**
 * Created by PhpStorm.
 * User: shiye
 * Date: 2019/6/4
 * Time: 12:13
 */

namespace app\home\controller;
use PHPMailer;
use think\Controller;

class Mail extends Controller
{
    public function index()
    {
        /*
         * $toemail ： 收件人邮箱
         * $to_name ： 收件人信息
         * $title   ： 邮件标题
         * $content ： 邮件正文
         */


        $code = rand('100000','999999');        //六位随机数
        $toemail= '17767065831@163.com';//收件人的邮箱
        $to_name = '嘎嘎';//设置收件人信息，如邮件格式说明中的收件人
        $title = '这是一份测试邮件！';
//        $content = Request::instance()->get('mail')."您的验证码为：【{$code}】";
        $content = "这是一个测试邮件，您的验证码是： 【{$code}】 记得回复我哟！么么哒...";


        $sendmail = 'v15068768324@163.com';     //发件人邮箱
        $sendmailpswd = "m246811";              //客户端授权密码,而不是邮箱的登录密码，就是手机发送短信之后弹出来的一长串的密码
        $send_name = '旧人不覆';                // 设置发件人信息，如邮件格式说明中的发件人，
        $mail = new PHPMailer\PHPMailer();      //实例化mail类
        $mail->isSMTP();                        // 使用SMTP服务
        $mail->CharSet = "utf8";                // 编码格式为utf8，不设置编码的话，中文会出现乱码
        $mail->Host = "SMTP.163.com";           // 发送方的SMTP服务器地址
        $mail->SMTPAuth = true;                 // 是否使用身份验证
        $mail->Username = $sendmail;            // 发件人地址
        $mail->Password = $sendmailpswd;        //客户端授权密码,而不是邮箱的登录密码！
        $mail->SMTPSecure = "ssl";              // 使用ssl协议方式
        $mail->Port = 465;                      //sina端口110或25） //qq  465 587
        $mail->setFrom($sendmail, $send_name);  // 设置发件人信息，如邮件格式说明中的发件人，
        $mail->addAddress($toemail, $to_name);  // 设置收件人信息，如邮件格式说明中的收件人，
        $mail->addReplyTo($sendmail, $send_name);// 设置回复人信息，指的是收件人收到邮件后，如果要回复，回复邮件将发送到的邮箱地址
        $mail->Subject = $title;     // 邮件标题
        //$code=$code;
         //session("code",$code);
        $mail->Body = $content;                 // 邮件正文
        //$mail->AltBody = "This is the plain text纯文本";// 这个是设置纯文本方式显示的正文内容，如果不支持Html方式，就会用到这个，基本无用
        if(!$mail->send()){
//            $this->return_msg(400,$mail->ErrorInfo);//返回数据格式自己定义的一个函数
           return json(["code"=>400,"result"=>$mail->ErrorInfo,"data"=>'']);//返回数据格式自己定义的一个函数

        }else{
//            $this->return_msg(200,"验证码已经发送，请注意查收");
            return json(["code"=>200,"result"=>"发送成功","data"=>'']);
            //(你也可以写return true;)
        }

    }
}