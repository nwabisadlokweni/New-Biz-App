import { Layout } from '../../components/Layout'
import { useUserSelect} from './UserSelect.useUserSelect'

export const UserSelect = () => {
    const { localUsers } = useUserSelect();

    return <Layout secondary={['Cancel', '/']} primary={['User not listed', '/auth/signIn']} title="Sign In">{localUsers.map(({ id }) => (
        <div>{id}</div>
    ))}</Layout>
}

export default UserSelect
