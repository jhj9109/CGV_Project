import notifier from 'node-notifier';
// String
export default function notice(msg: string) {
    notifier.notify(msg || 'Message');
}
