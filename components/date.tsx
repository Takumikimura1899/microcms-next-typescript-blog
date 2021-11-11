import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export function Date({ dateString }: { dateString: string }) {
  const timestamp = dayjs.utc(dateString).tz('Asia/Tokyo').format('YYYY-MM-DD');
  return <span>{timestamp}</span>;
}
