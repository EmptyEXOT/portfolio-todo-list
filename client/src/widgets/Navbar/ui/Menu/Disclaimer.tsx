import classNames from "classnames";
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";

interface DisclaimerProps {

}

export const Disclaimer = () => {
    return (
        <div className={classNames('m-3 p-3 flex gap-5 flex-col border-solid border-amber-600 border-2 sm:hidden')}>
            <Typo.H1 className={classNames('text-2xl text-center')} bold={true} variant={TypoVariant.Warning}>Mobile
                version is unavailable!</Typo.H1>
            <Typo.P bold={true} variant={TypoVariant.Warning} className={classNames('text-center')}>
                The mobile version of the application is being developed. You can use the desktop version of the app
                to log in.
            </Typo.P>
        </div>
    );
};