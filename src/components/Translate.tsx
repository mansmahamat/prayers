import React, { createRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createPopper } from '@popperjs/core';
import Flags from 'country-flag-icons/react/3x2';

function Translate() {
  const { i18n } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [lang, setlang] = useState(i18n.language);

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef<HTMLButtonElement>();
  const popoverDropdownRef = createRef<HTMLDivElement>();
  const containerRef = createRef<HTMLDivElement>();
  const openDropdownPopover = () => {
    //@ts-ignore
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start'
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    //@ts-ignore
    function handleClickOutside(event) {
      if (
        popoverDropdownRef.current &&
        !popoverDropdownRef.current.contains(event.target) &&
        btnDropdownRef.current &&
        !btnDropdownRef.current.contains(event.target)
      ) {
        closeDropdownPopover();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverDropdownRef]);

  let component = null;
  switch (i18n.language) {
    case 'en':
      component = <Flags.GB title="UK" className="h-8" />;
      break;
    case 'fr':
      component = <Flags.FR title="FR" className="h-8" />;
      break;
    case 'ar':
      component = <Flags.SA title="FR" className="h-8" />;
      break;
    default:
      component = null;
  }

  return (
    <div className="absolute left-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6" ref={containerRef}>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={' font-bold  uppercase  px-6 py-3  outline-none focus:outline-none  '}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
              }}>
              {component}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'text-base z-50 float-left py-2 bg-green-500 cursor-pointer   list-none text-left rounded shadow-lg mt-1'
              }
              style={{ minWidth: '12rem' }}>
              <li
                className={
                  'text-sm py-2 flex px-4 font-normal  w-full whitespace-nowrap hover:bg-green-700 bg-transparent '
                }
                onClick={() => {
                  i18n.changeLanguage('fr');
                  closeDropdownPopover();
                }}>
                Français
                <Flags.FR title="FR" className="h-4 ml-2" />
              </li>
              <li
                className={
                  'text-sm py-2 px-4 font-normal flex w-full whitespace-nowrap hover:bg-green-700 bg-transparent '
                }
                onClick={() => {
                  i18n.changeLanguage('en');
                  closeDropdownPopover();
                }}>
                English
                <Flags.GB title="UK" className="h-4 ml-2" />
              </li>
              <li
                className={
                  'text-sm py-2 px-4 font-normal flex w-full whitespace-nowrap hover:bg-green-700 bg-transparent '
                }
                onClick={() => {
                  i18n.changeLanguage('ar');
                  closeDropdownPopover();
                }}>
                Arabic
                <Flags.SA title="AR" className="h-4 ml-2" />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translate;
