import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { HiMenuAlt1 } from 'react-icons/hi';
import Toggle from './Toggle';
import Translate from './Translate';
import Logo from '../img/muslim.png';
import { IoNotifications, IoNotificationsOff } from 'react-icons/io5';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};
const navigation = [
  { name: 'Prayers', href: '#', current: true },
  { name: 'Hadiths', href: '#', current: false },
  { name: 'Quran', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface Notifications {
  notification: boolean;
  setNotification: Function;
}

function Navbar({ notification, setNotification }: Notifications) {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiMenuAlt1 className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenuAlt1 className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-8 w-auto" src={Logo} alt="Workflow" />
                  <img
                    className="hidden lg:block 
                   h-12 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames('px-3 py-2 rounded-md text-sm font-medium')}
                      aria-current={item.current ? 'page' : undefined}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <Translate />
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                    <a href="/">Change city</a>
                  </button>
                </div>

                {notification ? (
                  <div className="flex-shrink-0 ml-6">
                    <IoNotifications
                      size="1.25em"
                      onClick={() => setNotification(!notification)}
                      className="mr-2 text-green-500"
                    />
                  </div>
                ) : (
                  <div className="flex-shrink-0 ml-6">
                    <IoNotificationsOff
                      size="1.25em"
                      onClick={() => setNotification(!notification)}
                      className="mr-2"
                    />
                  </div>
                )}
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <Toggle />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <Toggle />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
