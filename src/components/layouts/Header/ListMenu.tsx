
import MenuItem from "./MenuItem"

export default function ListMenu() {
    const listMenu = [
        {
            label: 'About Our Program',
            children: [
                {
                    label: 'About Our Program sub1',
                    href: '/sub1'
                },
                {
                    label: 'About Our Program sub1',
                    href: '/sub1'
                },
                {
                    label: 'About Our Program sub1',
                    href: '/sub1'
                },
            ]
        },
        {
            label: 'Shop',
            children: [
                {
                    label: 'Shop sub1',
                    href: '/sub1'
                },
                {
                    label: 'Shop sub1',
                    href: '/sub1'
                },
                {
                    label: 'Shop sub1',
                    href: '/sub1'
                },
            ]
        },
        {
            label: 'My Service',
            children: [
                {
                    label: 'My Service sub1',
                    href: '/sub1'
                },
                {
                    label: 'My Service sub1',
                    href: '/sub1'
                },
                {
                    label: 'My Service sub1',
                    href: '/sub1'
                },
            ]
        },
        {
            label: 'Why AirTalk',
            children: [
                {
                    label: 'Why AirTalk sub1',
                    href: '/sub1'
                },
                {
                    label: 'Why AirTalk sub1',
                    href: '/sub1'
                },
                {
                    label: 'Why AirTalk sub1',
                    href: '/sub1'
                },
            ]
        },
        {
            label: 'Help center',
            children: [
                {
                    label: 'Help center sub1',
                    href: '/sub1'
                },
                {
                    label: 'Help center sub1',
                    href: '/sub1'
                },
                {
                    label: 'Help center sub1',
                    href: '/sub1'
                },
            ]
        },
        {
            label: 'My state',
            children: [
                {
                    label: 'My state sub1',
                    href: '/sub1'
                },
                {
                    label: 'My state sub1',
                    href: '/sub1'
                },
                {
                    label: 'My state sub1',
                    href: '/sub1'
                },
            ]
        },
    ]

    return (
        <ul
            className="flex items-center"
        >
            {
                listMenu.map((it, index) => {
                    return (
                        <MenuItem
                            key={index}
                            {...it}
                        />
                    )
                })
            }
        </ul>
    )
}
