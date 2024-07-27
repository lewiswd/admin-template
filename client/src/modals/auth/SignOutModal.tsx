import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@nextui-org/react";

import { ModalProps } from "../types";

const SignOutModal = ({
    isOpen,
    onClose: onCloseProp,
    onSubmit,
    title = "modal title",
    size = "md",
    loading,
}: ModalProps) => {
    return (
        <Modal size={size} isOpen={isOpen} onClose={onCloseProp}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            <div className="first-letter:uppercase font-semibold text-lg">
                                {title}
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <p className="text-gray-900 first-letter:uppercase">
                                bạn có muốn đăng xuất
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="light"
                                onClick={onClose}
                            >
                                Huỷ
                            </Button>
                            <Button
                                className="text-white"
                                color="success"
                                onPress={onSubmit}
                                isLoading={loading}
                                disabled={loading}
                            >
                                {loading ? "Đang đăng xuất" : "Đăng xuất"}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default SignOutModal;
