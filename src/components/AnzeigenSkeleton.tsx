
import { Skeleton} from 'antd'


interface Props {
  title: string

}

const AnzeigenSkeleton = (props: Props) => {
  return(
    <div className='listings'>
      <h2>{props.title} </h2>
      <Skeleton active paragraph={{rows: 1}} />
      <Skeleton active paragraph={{rows: 1}} />
      <Skeleton active paragraph={{rows: 1}} />
    </div>
  )
}

export default AnzeigenSkeleton