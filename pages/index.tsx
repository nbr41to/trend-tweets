import { useState } from 'react';
import { useTrends } from '../src/libs/hooks/useTrends';
import { useTweets } from '../src/libs/hooks/useTweets';

export default function Home() {
  const [isDirect, setIsDirect] = useState(false);
  const [query, setQuery] = useState('');

  const { data: trends } = useTrends();
  const { data: tweets } = useTweets(query);

  const handleClick = (trend: any) => {
    if (isDirect) {
      window.open(trend.url, '_blank');
    } else {
      setQuery(trend.query);
    }
  };

  return (
    <div>
      <header className='flex items-end py-6 justify-center flex-wrap'>
        <h1 className='md:text-4xl text-2xl'>Trend Tweets</h1>
        <div className='ml-4 md:text-lg'>最終更新：{trends?.as_of}</div>
      </header>

      <div className='border mb-10' />

      {trends && (
        <div className='px-10'>
          <div className='flex items-end'>
            <h2 className='md:text-2xl text-xl'>最新のトレンド一覧</h2>
            <div>
              <input
                name='toggle-direct'
                type='checkbox'
                className='ml-4 cursor-pointer'
                checked={isDirect}
                onChange={() => setIsDirect(!isDirect)}
              />
              <label
                className='ml-1 cursor-pointer'
                htmlFor='toggle-direct'
                onClick={() => setIsDirect(!isDirect)}
              >
                トレンドワードをクリックしたら直接Twitterを開く
              </label>
            </div>
          </div>
          <div className='flex md:gap-8 gap-4 flex-wrap mt-8'>
            {trends.trends.map((trend: any) => (
              <div
                key={trend.name}
                className='cursor-pointer flex items-end gap-1'
              >
                <div
                  onClick={() => handleClick(trend)}
                  className='md:text-3xl text-xl hover:underline'
                >
                  {trend.name[0] !== '#' && '#'}
                  {trend.name}
                </div>
                {trend.tweet_volume && (
                  <span className='text-sm'>({trend.tweet_volume})</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {tweets && (
        <div className='divide-y space-y-4 max-w-[700px] mt-20 px-10'>
          <h2 className='md:text-2xl text-xl'>
            「{decodeURI(query)}」に関する投稿
          </h2>
          {tweets.map((tweet: any, index: number) => (
            <div key={tweet.id} className='pt-4 px-6'>
              <div>
                {index + 1}. ツイ廃の名無しさん ID:
                {parseInt(tweet.id).toString(36)}
              </div>
              <p className='mt-2 text-xl'>{tweet.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
