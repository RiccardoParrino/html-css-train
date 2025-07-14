import { Message } from "../message/message.model";
import { Thread } from "../thread/thread.model";
import { User } from "../user/user.model";
import * as moment from 'moment';

const me: User = new User('Juliet', 'assets/images/avatars/female-avatar-1.png');
const ladycap: User = new User('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
const echo: User    = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
const rev: User     = new User('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
const wait: User    = new User('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');

const tLadycap: Thread = new Thread('tLadycap', ladycap.name, ladycap.avatarSrc);
const tEcho: Thread = new Thread('tEcho', echo.name, echo.avatarSrc);
const tRev: Thread = new Thread('tRev', rev.name, rev.avatarSrc);
const tWait: Thread = new Thread('tWait', wait.name, wait.avatarSrc);

const initialMessages: Array<Message> = [

    new Message({
        author: me,
        sentAt: moment,
        text: 'Yet let me weep for such a feeling loss.',
        thread: tLadycap
    }),
    new Message({
        author: ladycap,
        sentAt: moment,
        text: 'So shall you feel the loss, but not the friend which you weep for.',
        thread: tLadycap
    }),
    new Message({
        author: echo,
        sentAt: moment,
        text: `I'll echo whatever you send me`,
        thread: tLadycap
    }),
    new Message({
        author: rev,
        sentAt: moment,
        text: `I\'ll reverse whatever you send me`,
        thread: tRev
    }),
    new Message({
        author: wait,
        sentAt: moment,
        text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
        thread: tWait
    })
    
];
