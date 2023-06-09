import { webpack } from "replugged";
import { Channel, DirectMessage, GroupDM } from ".";

export const { getChannel } = webpack.getByProps<{
  getChannel: (id: string) => Channel;
  hasChannel: (id: string) => boolean;
}>("getChannel", "hasChannel")!;

export default ({ id, selected }: { id: string; selected: boolean }) => {
  const channel = (getChannel as (id: string) => Channel)(id);
  if (!channel) return null;

  if (channel.type === 3) return <GroupDM channel={channel} selected={selected} />;
  else return <DirectMessage channel={channel} selected={selected} />;
};
