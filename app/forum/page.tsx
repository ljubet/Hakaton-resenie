"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/ui/Navbar"

const initialPosts = [
    { id: 1, title: "How to secure funding for your startup", author: "John Doe", comments: 15 },
    { id: 2, title: "Best practices for remote team management", author: "Jane Smith", comments: 12 },
    { id: 3, title: "The importance of user experience in product design", author: "Bob Johnson", comments: 10 },
    { id: 4, title: "Scaling your startup: Challenges and solutions", author: "Emma Davis", comments: 8 },
    { id: 5, title: "The role of AI in modern startups", author: "Michael Lee", comments: 20 },
]

export default function Forum() {
    const [posts, setPosts] = useState(initialPosts)
    const [newPost, setNewPost] = useState({ title: "", content: "" })
    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = posts.length + 1
        setPosts([...posts, { id: newId, ...newPost, author: "Current User", comments: 0 }])
        setNewPost({ title: "", content: "" })
        setIsFormVisible(false)
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-brand-teal mb-8">Стартап форум</h1>
                <div className="mb-8">
                    <button
                        onClick={() => setIsFormVisible(true)}
                        className="bg-brand-red text-white px-4 py-2 rounded hover:bg-brand-orange transition-colors mb-16"
                    >
                        Постави прашање
                    </button>
                    {isFormVisible && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                                <h2 className="text-2xl font-semibold text-brand-teal mb-4">Постави прашање</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Question Title"
                                        value={newPost.title}
                                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                    <textarea
                                        placeholder="Question Details"
                                        value={newPost.content}
                                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        rows={4}
                                        required
                                    ></textarea>
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsFormVisible(false)}
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                                        >
                                            Затвори
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-brand-red text-white px-4 py-2 rounded hover:bg-brand-orange transition-colors"
                                        >
                                            Постави
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-brand-teal mb-12">Неодамнешни дискусии</h2>
                    <div className="flex flex-wrap -mx-2">
                        {posts.map((post) => (
                            <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-48 flex flex-col justify-between">
                                    <div>
                                        <Link
                                            href={`/forum/post/${post.id}`}
                                            className="text-lg font-semibold text-brand-teal hover:text-brand-orange"
                                        >
                                            {post.title}
                                        </Link>
                                        <p className="text-sm text-gray-600 mt-2">By {post.author}</p>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">{post.comments} коментари</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}