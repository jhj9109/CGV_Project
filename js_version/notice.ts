import notifier from 'node-notifier';

export default function notice(msg: string = '따르릉 알람이 울립니다~!') {
    notifier.notify(msg);
}
